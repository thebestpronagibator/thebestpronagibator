var pacman_top = 16;
var pacman_left = 16;
var move_t = false;
var move_d = false;
var move_r = false;
var move_l = false;
var move_stop = false;
var change_way_t = false;
var change_way_d = false;
var change_way_r = false;
var change_way_l = false;
var a=0;
var b=0;
/*
1     16      16
2     16      116
3     16      236
4     16      296
5     16      416
6     16      516
7     96      16
8     96      116
9     96      176
10    96      236
11    96      296
12    96      356
13    96      416
14    96      516
15    156     16
16    156     116
17    156     176
18    156     236
19    156     296
20    156     356
21    156     416
22    156     516
23    216     176
24    216     236
25    216     296
26    216     356
27    276     116
28    276     176
29    276     356
30    276     416
31    336     176
32    336     356
33    396     16
34    396     116
35    396     176
36    396     236
37    396     296
38    396     356
39    396     416
40    396     516
41    456     16
42    456     56
43    456     116
44    456     176
45    456     236
46    456     296
47    456     356
48    456     416
49    456     476
50    456     516
51    516     16
52    516     56
53    516     116
54    516     176
55    516     236
56    516     296
57    516     356
58    516     416
59    516     476
60    516     516
61    576     16
62    576     236
63    576     296
64    576     516

*/
function onReady(){
	setInterval(move_checker, 1, 0);
	setInterval(move_checker_2, 1, 0);
	setInterval(moving, 10, 0);
}
function move_checker(){
	if(pacman_top==16 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==16 && pacman_left==16 && move_d){
		all_false();
		b=3;
		a=156;
	}
	if(pacman_top==16 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==16 && pacman_left==116 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==16 && pacman_left==116 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==16 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==516 && pacman_left==116 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==16 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==96 && pacman_left==16 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==96 && pacman_left==16 && move_d){
		all_false();
		b=3;
		a=156;
	}
	if(pacman_top==96 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==96 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==16 && pacman_left==236 && move_d){
		all_false();
		b=3;
		a=96;
	}
	if(pacman_top==96 && pacman_left==236 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==116 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==156 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=116;
	}
	if(pacman_top==96 && pacman_left==116 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==96 && pacman_left==116 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==96 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==96 && pacman_left==116 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==96 && pacman_left==296 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==16 && pacman_left==296 && move_d){
		all_false();
		b=3;
		a=96;
	}
	if(pacman_top==96 && pacman_left==296 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==96 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==96 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==96 && pacman_left==236 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==16 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==16 && pacman_left==416 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==16 && pacman_left==416 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==16 && pacman_left==416 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==16 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==16 && pacman_left==516 && move_d){
		all_false();
		b=3;
		a=156;
	}
	if(pacman_top==96 && pacman_left==516 && move_d){
		all_false();
		b=3;
		a=156;
	}
	if(pacman_top==96 && pacman_left==516 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==516 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=416;
	}
	if(pacman_top==156 && pacman_left==116 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==96 && pacman_left==176 && move_d){
		all_false();
		b=3;
		a=156;
	}
	if(pacman_top==96 && pacman_left==176 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==96 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==96 && pacman_left==356 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==96 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==96 && pacman_left==356 && move_d){
		all_false();
		b=3;
		a=156;
	}
	if(pacman_top==96 && pacman_left==416 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==96 && pacman_left==416 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==96 && pacman_left==416 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==96 && pacman_left==416 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==176 && move_t){
		all_false();
		b=4;
		a=96;
	}
	if(pacman_top==156 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==156 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==156 && pacman_left==236 && move_d){
		all_false();
		b=3;
		a=216;
	}
	if(pacman_top==156 && pacman_left==356 && move_t){
		all_false();
		b=4;
		a=96;
	}
	if(pacman_top==156 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==156 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==156 && pacman_left==296 && move_d){
		all_false();
		b=3;
		a=216;
	}
	if(pacman_top==156 && pacman_left==416 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==156 && pacman_left==416 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==156 && pacman_left==416 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==276 && pacman_left==116 && move_r){
		all_false();
		b=2;
		a=176;
	}
	if(pacman_top==276 && pacman_left==116 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==276 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==276 && pacman_left==176 && move_d){
		all_false();
		b=3;
		a=396;
	}
	if(pacman_top==276 && pacman_left==176 && move_t){
		all_false();
		b=4;
		a=216;
	}
	if(pacman_top==276 && pacman_left==176 && move_l){
		all_false();
		b=1;
		a=116;
	}
	if(pacman_top==216 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==216 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==216 && pacman_left==176 && move_d){
		all_false();
		b=3;
		a=396;
	}
	if(pacman_top==216 && pacman_left==236 && move_t){
		all_false();
		b=4;
		a=156;
	}
	if(pacman_top==216 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==216 && pacman_left==236 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==216 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==216 && pacman_left==296 && move_t){
		all_false();
		b=4;
		a=156;
	}
	if(pacman_top==216 && pacman_left==296 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==216 && pacman_left==296 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==216 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==216 && pacman_left==356 && move_d){
		all_false();
		b=3;
		a=396;
	}
	if(pacman_top==276 && pacman_left==356 && move_r){
		all_false();
		b=2;
		a=416;
	}
	if(pacman_top==276 && pacman_left==356 && move_t){
		all_false();
		b=4;
		a=216;
	}
	if(pacman_top==276 && pacman_left==356 && move_d){
		all_false();
		b=3;
		a=396;
	}
	if(pacman_top==276 && pacman_left==416 && move_l){
		all_false();
		b=1;
		a=356;
	}
	if(pacman_top==276 && pacman_left==416 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==276 && pacman_left==416 && move_d){
		all_false();
		b=3;
		a=516;
	}
}
function move_checker_2(){
	if(pacman_top==336 && pacman_left==176 && move_t){
		all_false();
		b=4;
		a=216;
	}
	if(pacman_top==336 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==336 && pacman_left==176 && move_d){
		all_false();
		b=3;
		a=396;
	}
	if(pacman_top==336 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==336 && pacman_left==356 && move_d){
		all_false();
		b=3;
		a=396;
	}
	if(pacman_top==336 && pacman_left==356 && move_t){
		all_false();
		b=4;
		a=216;
	}
	if(pacman_top==396 && pacman_left==116 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==396 && pacman_left==116 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==396 && pacman_left==116 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==396 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==396 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==396 && pacman_left==16 && move_d){
		all_false();
		b=3;
		a=456;
	}
	if(pacman_top==396 && pacman_left==176 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==396 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==396 && pacman_left==176 && move_t){
		all_false();
		b=4;
		a=216;
	}
	if(pacman_top==396 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==396 && pacman_left==236 && move_d){
		all_false();
		b=3;
		a=456;
	}
	if(pacman_top==396 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==396 && pacman_left==356 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==396 && pacman_left==356 && move_t){
		all_false();
		b=4;
		a=216;
	}
	if(pacman_top==396 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==396 && pacman_left==296 && move_d){
		all_false();
		b=3;
		a=456;
	}
	if(pacman_top==396 && pacman_left==416 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==396 && pacman_left==416 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==396 && pacman_left==416 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==396 && pacman_left==416 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==396 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==396 && pacman_left==516 && move_d){
		all_false();
		b=3;
		a=456;
	}
	if(pacman_top==456 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=56;
	}
	if(pacman_top==456 && pacman_left==16 && move_t){
		all_false();
		b=4;
		a=396;
	}
	if(pacman_top==456 && pacman_left==56 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==456 && pacman_left==56 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==456 && pacman_left==116 && move_r){
		all_false();
		b=2;
		a=416;
	}
	if(pacman_top==456 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==456 && pacman_left==116 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==456 && pacman_left==116 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==456 && pacman_left==176 && move_l){
		all_false();
		b=1;
		a=116;
	}
	if(pacman_top==456 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=416;
	}
	if(pacman_top==456 && pacman_left==176 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==456 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=116;
	}
	if(pacman_top==456 && pacman_left==236 && move_r){
		all_false();
		b=2;
		a=416;
	}
	if(pacman_top==456 && pacman_left==236 && move_t){
		all_false();
		b=4;
		a=396;
	}
	if(pacman_top==456 && pacman_left==296 && move_l){
		all_false();
		b=1;
		a=116;
	}
	if(pacman_top==456 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=416;
	}
	if(pacman_top==456 && pacman_left==296 && move_t){
		all_false();
		b=4;
		a=396;
	}
	if(pacman_top==456 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=116;
	}
	if(pacman_top==456 && pacman_left==356 && move_r){
		all_false();
		b=2;
		a=416;
	}
	if(pacman_top==456 && pacman_left==356 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==456 && pacman_left==416 && move_l){
		all_false();
		b=1;
		a=116;
	}
	if(pacman_top==456 && pacman_left==416 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==456 && pacman_left==416 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==456 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=476;
	}
	if(pacman_top==456 && pacman_left==516 && move_t){
		all_false();
		b=4;
		a=396;
	}
	if(pacman_top==456 && pacman_left==476 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==456 && pacman_left==476 && move_d){
		all_false();
		b=3;
		a=516;
	}
	if(pacman_top==516 && pacman_left==56 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==516 && pacman_left==56 && move_r){
		all_false();
		b=2;
		a=116;
	}
	if(pacman_top==516 && pacman_left==56 && move_t){
		all_false();
		b=4;
		a=456;
	}
	if(pacman_top==516 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=116;
	}
	if(pacman_top==516 && pacman_left==16 && move_d){
		all_false();
		b=3;
		a=576;
	}
	if(pacman_top==516 && pacman_left==116 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==516 && pacman_left==176 && move_r){
		all_false();
		b=2;
		a=236;
	}
	if(pacman_top==516 && pacman_left==176 && move_t){
		all_false();
		b=4;
		a=456;
	}
	if(pacman_top==516 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=176;
	}
	if(pacman_top==516 && pacman_left==236 && move_d){
		all_false();
		b=3;
		a=576;
	}
	if(pacman_top==516 && pacman_left==356 && move_l){
		all_false();
		b=1;
		a=296;
	}
	if(pacman_top==516 && pacman_left==356 && move_t){
		all_false();
		b=4;
		a=456;
	}
	if(pacman_top==516 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=356;
	}
	if(pacman_top==516 && pacman_left==296 && move_d){
		all_false();
		b=3;
		a=576;
	}
	if(pacman_top==516 && pacman_left==416 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==516 && pacman_left==416 && move_t){
		all_false();
		b=4;
		a=16;
	}
	if(pacman_top==516 && pacman_left==476 && move_l){
		all_false();
		b=1;
		a=416;
	}
	if(pacman_top==516 && pacman_left==476 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==516 && pacman_left==476 && move_t){
		all_false();
		b=4;
		a=456;
	}
	if(pacman_top==516 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=416;
	}
	if(pacman_top==516 && pacman_left==516 && move_d){
		all_false();
		b=3;
		a=576;
	}
	if(pacman_top==576 && pacman_left==16 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==576 && pacman_left==16 && move_t){
		all_false();
		b=4;
		a=516;
	}
	if(pacman_top==576 && pacman_left==236 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==576 && pacman_left==236 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==576 && pacman_left==236 && move_t){
		all_false();
		b=4;
		a=516;
	}
	if(pacman_top==576 && pacman_left==296 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==576 && pacman_left==296 && move_r){
		all_false();
		b=2;
		a=516;
	}
	if(pacman_top==576 && pacman_left==296 && move_t){
		all_false();
		b=4;
		a=516;
	}
	if(pacman_top==576 && pacman_left==516 && move_l){
		all_false();
		b=1;
		a=16;
	}
	if(pacman_top==576 && pacman_left==516 && move_t){
		all_false();
		b=4;
		a=516;
	}
}

function moving(){// b - way a - limit
	if(b==1){//left
		if(pacman_left>a){
			pacman_left=pacman_left-2;
			$(".pacman").css("margin-left", pacman_left);
		}
		else{
			a=0;
			b=0;
		}
	}
	if(b==2){//right
		if(pacman_left<a){
			pacman_left=pacman_left+2;
			$(".pacman").css("margin-left", pacman_left);
		}
		else{
			a=0;
			b=0;
		}
	}
	if(b==3){//bottom
		if(pacman_top<a){
			pacman_top=pacman_top+2;
			$(".pacman").css("margin-top", pacman_top);
		}
		else{
			a=0;
			b=0;
		}
	}
	if(b==4){//top
		if(pacman_top>a){
			pacman_top=pacman_top-2;
			$(".pacman").css("margin-top", pacman_top);
		}
		else{
			a=0;
			b=0;
		}
	}
}

document.onkeypress = function(event){ // keyCode finder
	if(event.keyCode == 97){
		move_l = true;
		change_way_l = true;
	}
	if(event.keyCode == 100){
		move_r = true;
		change_way_r = true;
	}
	if(event.keyCode == 115){
		move_d = true;
		change_way_d = true;
	}
	if(event.keyCode == 119){
		move_t = true;
		change_way_t = true;
	}
	if(event.keyCode == 32){
		move_stop = true;
	}
}
function all_false(){ // function just for turn move_ to false
	move_l = false;
	move_r = false;
	move_t = false;
	move_d = false;
}
function cp(i, j){
	$(".pacman").css("margin-left", i);
	$(".pacman").css("margin-top", j);
}
$(document).ready(onReady);