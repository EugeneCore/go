# Go

Runs an arrays of functions.

## How to use

```js
go([
	function(c)
	{
		console.log(1);
		c.next();
	},

	function(c)
	{
		console.log(2);
		c.next();
	},

	function(c)
	{
		console.log(3);
	}
]);
```

## Controller

A controller (c) will be passed as a first argument of each function.

### Methods

```js
c.next(); // To call the next function
c.repeat(); // To repeat the current function
```

If a function has a name, it can be called by a controller:

```js
go([
	function a(c)
	{
		console.log(1);
		c.next();
	},

	function b(c)
	{
		console.log(2);
		c.next();
	},

	function c(c)
	{
		c.a(); // Will call the first function
	}
]);
```

## Arguments

Arguments can be passed after a controller:

```js
go([
	function(c)
	{
		let x = 21;
		c.next(x);
	},

	function(c, x)
	{
		console.log(x); // 21
	}
]);
```

Arguments can be passed inside a controller:

```js
go([
	function(c)
	{
		c.x = 21;
		c.next(c);
	},

	function(c)
	{
		console.log(c.x); // 21
	}
]);
```