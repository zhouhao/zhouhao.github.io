---
layout: post
title: "Sort algorithms in Java"
description: "Sort algorithms in Java"
category: Java
tags: [Java, Sort algorithm]
---
	I provide 4 common sorting algorithms here: Bubble, Selection, Merge, QUick.   
	
<pre class="brush:java">
/**
 *
 * @author zhouhao
 */
public class Sort {
	
	public static void bubbleSort(float[] array){
		int length = array.length;
		for(int i = 0; i &lt; length; i++){
			for(int j = 0; j &lt; length - i-1; j++){
				if(array[j+1] > array[j]){
					float tmp = array[j];
					array[j] = array[j+1];
					array[j+1] = tmp;
				}
			}
		}

		for(int i = 0; i &lt; length; i++){
			System.out.print(array[i] + "  ");
		}
		System.out.println();
	
	}
	
	public static void selectionSort(float[] array){
		int length = array.length;
		for(int i = 0; i &lt; length; i++){
			int k = i;
			for(int j = i+1; j &lt; length; j++){
				if(array[k] > array[j]){
					k = j;
				}
			}
			if(k != i){
				float tmp = array[i];
				array[i] = array[k];
				array[k] = tmp;
			}
			
		}

		for(int i = 0; i &lt; length; i++){
			System.out.print(array[i] + "  ");
		}
		System.out.println();
	
	}
	
	public static void mergeSort(float[] array, int low, int high){
		//float[] helper = new float[array.length];
		if(low &lt; high){
			int middle = (low + high)/2;
			mergeSort(array, low, middle);
			mergeSort(array, middle+1, high);
			merge(array, low, middle, high);
		}

		// output the sorted result
		if(low == 0 && high == array.length-1){
			for(int i = 0; i &lt; array.length; i++){
				System.out.print(array[i] + "  ");
			}
			System.out.println();
		}

	}
	
	public static void merge(float[] array, int low, int middle, int high){
		float[] tmp = new float[array.length];
		for(int i = low; i &lt;= high; i++){
			tmp[i] = array[i];
		}

		int left = low;
		int right = middle+1;
		int current = low;

		while(left &lt;= middle && right &lt;= high){
			if(tmp[left] &lt; tmp[right]){
				array[current++] = tmp[left];
				left++;
			} else {
				array[current++] = tmp[right];
				right++;
			}
		}

		// if there are still some nodes in [left ~ middle]
		int remain = middle - left;
		for(int i = 0; i &lt; remain; i++){
			array[current+i] = tmp[left+i];
		}
	}


	public static void quickSort(float[] array, int left, int right){
		int index = partition(array, left, right);
		if(left &lt; index-1){
			quickSort(array, left, index-1);
		}
		if(index &lt; right){
			quickSort(array, index, right);
		}

		if(left == 0 && right == array.length-1){
			for(int i = 0; i &lt; array.length; i++){
				System.out.print(array[i] + "  ");
			}
			System.out.println();
		}
	}

	public static int partition(float[] array, int left, int right){
		float pivot = array[(left+right)/2];
		while(left &lt;= right){
			while(array[left] &lt; pivot) left++;
			while(array[right] > pivot) right--;
			if(left &lt;= right){
				float tmp = array[left];
				array[left] = array[right];
				array[right] = tmp;
				left++;
				right--;
			}

		}
		return left;
	}

	/**
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
	// TODO code application logic here
		float[] array = new float[]{1, 2, 2.3f, 1.6f, 0.3f, 67,20, 12.4f};
		bubbleSort(array);
		selectionSort(array);
		mergeSort(array, 0, array.length-1);
		quickSort(array, 0, array.length-1);
	}
}
</pre>

Find more code in my GitHub: [https://github.com/zhouhao/First-Step-To-Java/blob/master/Sort/Sort.java](https://github.com/zhouhao/First-Step-To-Java/blob/master/Sort/Sort.java)