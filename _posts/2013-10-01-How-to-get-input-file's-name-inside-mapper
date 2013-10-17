---
layout: post
title: "How to get input file's name inside mapper"
description: "How to get input file's name inside mapper"
category: Hadoop
tags: [Big Data, Hadoop]
---
好吧，我承认用Hadoop来处理大数据是件很酷的事。但是有时候在做course project的时候还是让我很受挫。   
很多时候我们在一个map-reduce任务中，会用到Join，这样整个job的输入可能就是两个以上的文件了（换句话说：mapper要处理两个以上的文件）。   
     
如何用mapper处理多输入的情况：  
> 多个mapper：每个mapper处理对应的输入文件[https://github.com/zhouhao/Hadoop_Project1/blob/master/MapReduceQueries/Query3/query3.java][1]       

     <!-- lang: java -->
      MultipleInputs.addInputPath(conf, new Path(args[0]), TextInputFormat.class, CustomerMap.class);
      MultipleInputs.addInputPath(conf, new Path(args[1]), TextInputFormat.class, TransactionMap.class);
      FileOutputFormat.setOutputPath(conf, new Path(args[2]));      


> 一个mapper：一个mapper处理所有不同的文件：[https://github.com/zhouhao/CS525-Big-Data-Course-Project/blob/master/OtherDemo/query1.java][2]（如下代码段，在mapper内部，我们可以数据来自哪个文件，然后进行相应的处理）      
    
         <!-- lang: java -->
          public static class Map extends MapReduceBase implements Mapper<LongWritable, Text, Text, Text> 
        {

		public void map(LongWritable key, Text value, OutputCollector<Text,Text> output, Reporter reporter) throws IOException 
		{
			//Get FileName from reporter
			FileSplit fileSplit = (FileSplit)reporter.getInputSplit();
			String filename = fileSplit.getPath().getName();

			//String line = value.toString();
			output.collect(new Text(filename),value);  			
	    }
        }

PS: mapper的输入可以是一个文件夹：`FileInputFormat.setInputPaths(conf, new Path("/tmp/"));`


  [1]: https://github.com/zhouhao/Hadoop_Project1/blob/master/MapReduceQueries/Query3/query3.java
  [2]: https://github.com/zhouhao/CS525-Big-Data-Course-Project/blob/master/OtherDemo/query1.java
