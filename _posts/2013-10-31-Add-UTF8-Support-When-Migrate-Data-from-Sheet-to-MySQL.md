---
layout: post
title: "Add UTF8 Support When Migrating Data from Sheet to MySQL"
description: "Add UTF8 Support When Migrating Data from Sheet to MySQL"
category: Perl
tags: [Perl, MySQL, Sheet]
---
In recent life, I always need to migrate data from excel sheets into MySQL. But in sometimes, I do some mess-up. For example, **αβγ**...These are not **ASCII** symbols. So when I do the migration, they will be **Unrecognizable Code**.  
###The code I used at the first stage:
<pre class="brush: perl">
#!/usr/bin/perl -w
use strict;  
use warnings;
use DBI;
use Encode;
use strict;
use Time::localtime;
use Data::Dumper;
use Time::Local;
use Spreadsheet::ParseExcel;  
use Spreadsheet::WriteExcel;


my $parser = Spreadsheet::ParseExcel->new();  
my $products_workbook = $parser->Parse('test.xls');  
my $products_worksheet = $products_workbook->worksheet('Products_2'); 
my ( $row_min, $row_max ) = $products_worksheet->row_range();  
my @sheetArray;

my $count = 1;

my $dbh = DBI->connect( 'DBI:mysql:zencart', 
                        'user-name', 
                        'pass-word', 
                        {RaiseError=>1,AutoCommit=>0}
                      ) 
          || die "Database connection not made: $DBI::errstr"; 

my $sth;

for my $row ( $row_min .. $row_max) 
{  
    my $catalog = $products_worksheet->get_cell( $row, 0 );
    my $name = $products_worksheet->get_cell( $row, 1 );
    next unless $catalog;  
    $catalog = $catalog->unformatted();
    $name = $name->unformatted();

    #add this product into database
    my $sql= q{update `products` set `products_name` = ? where `products_catalog` = ?};

    print $catalog." ".$name. "\n";
    $sth = $dbh->prepare($sql);
    $sth->bind_param(2, $catalog);
    $sth->bind_param(1, $name);

    $sth->execute(); 
}
 
$dbh->disconnect(); 

</pre>
###after some modification:
<pre class="brush: perl">
# more code here
$dbh->{'mysql_enable_utf8'} = 1;
$dbh->do('SET NAMES utf8'); 

my $sth;

for my $row ( $row_min .. $row_max) 
{  
    my $catalog = $products_worksheet->{Cells}[$row][0]->Value; 
    my $name = $products_worksheet->{Cells}[$row][1]->Value;
    
	# more code here
}
</pre>