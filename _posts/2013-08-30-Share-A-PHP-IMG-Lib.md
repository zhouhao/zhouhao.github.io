---
layout: post
title: "Share a image for PHP with GD2 in Codeigniter"
description: "Last Class for Spring Term"
category: PHP
tags: [PHP, Codeigniter]
---

```
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Imglib
{

	public $CI = NULL;
	public function __construct()
	{	
		$this->CI =& get_instance();
	}

	public function ImageUpload($sizeLimit = 3072,$widthLimit = 3000, $heightLimit =3000 )
	{
		$config['upload_path'] = $_SERVER['DOCUMENT_ROOT'].'/images/shop/';
		$config['allowed_types'] = 'gif|jpg|png|bmp';
		$config['max_size']	= $sizeLimit;
		$config['max_width']  = $widthLimit;
		$config['max_height']  = $heightLimit;

		$this->CI->load->library('upload', $config);
		$this->CI->upload->initialize($config);
		if ( ! $this->CI->upload->do_upload())
		{
			$data = array(
					'key' 	=> false,
					'data'  => $this->CI->upload->display_errors()
					);
			//echo $this->CI->upload->display_errors();
			return $data;
		}
		else
		{
			$data = array(
					'key'	=> true,
					'data'  => $this->CI->upload->data()
				);
			//print_r($this->CI->upload->data());
			return $data;
		}
	}

	function createThumb( $image, $path='/images/', $width=400, $height=325)
	{
		$newImages = substr_replace($image, '_small', -4, 0);
		$ResizedImage = substr_replace($image, '_resize', -4, 0);
		
		$pathToImages = $_SERVER['DOCUMENT_ROOT'].$path.$image;
		$pathToNewImages = $_SERVER['DOCUMENT_ROOT'].$path.$newImages;
		$pathToResizedImage = $_SERVER['DOCUMENT_ROOT'].$path.$ResizedImage;
		
		list($originalWidth, $originalHeight) = getimagesize($pathToImages);
		$ratio = $width/$height;
		$orginalRatio = $originalWidth/$originalHeight;
		if($orginalRatio < $ratio)
		{
			$resizeWidth = $width;
			$resizeHeight = $width/$orginalRatio;
			$cropX = 0;
			$cropY = ($resizeHeight - $height)/2;
		}
		else
		{
			$resizeHeight = $height;
			$resizeWidth = $height*$orginalRatio;
			$cropX = ($resizeWidth - $width)/2;
			$cropY = 0;
		}
		//echo $originalWidth."-111-". $originalHeight."-222-";
		//die($ratio);
		//die($pathToImages);

		//RESIZE
		$config = array(
	        'image_library' 	=> 'gd2',
	        'quality' 			=> '100%',
	        'source_image' 		=>  $pathToImages,
	        'maintain_ratio' 	=> false,
	        'new_image' 		=> $pathToResizedImage,
	        'create_thumb' 		=> false,
	        'width' 			=> $resizeWidth,
	        'height' 			=> $resizeHeight
	    );     

		
		$this->CI->load->library('image_lib', $config); 
		$this->CI->image_lib->initialize($config);
		if($this->CI->image_lib->resize())
		{
			$this->CI->image_lib->clear();
		}
		else
		{
			return false;
		}
		
		//CROP
		$config = array(
	        'image_library' 	=> 'gd2',
	        'quality' 			=> '100%',
	        'source_image' 		=> $pathToResizedImage,
	        'x_axis' 			=> $cropX,
	        'y_axis' 			=> $cropY,
	        'new_image' 		=> $pathToNewImages,
	        'maintain_ratio' 	=> false,
	        'create_thumb' 		=> false,
	        'width' 			=> $width,
	        'height' 			=> $height
	    );     

		
		$this->CI->load->library('image_lib', $config); 
		$this->CI->image_lib->initialize($config);
		if($this->CI->image_lib->crop())
		{
			unlink($pathToResizedImage);
			$this->CI->image_lib->clear();
			return $newImages;
		}
		else
		{
			 return false;
		}
		
	}
	
}
?>
```
