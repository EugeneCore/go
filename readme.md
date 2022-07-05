# Go

Runs an arrays of function.

## How to use

```
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

A controller (c) passed in first argument of each function.

### Methods

```
	c.next(); // To call next function
	c.repeat(); // To repeat current function
```

If function has a name, it can be called by a controller:

```
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

	function(c)
	{
		c.a(); // Will call the first function
	}
]);
```

## Arguments

Any arguments can be passed after a controller:

```
go([
	function(c)
	{
		let x = 1;
		console.log(x); // 1
		c.next(x);
	},

	function(c, x)
	{
		x += 2;
		console.log(x); // 3

		x += 1;
		c.next(x, true);
	},

	function(c, x, b)
	{
		console.log(x) // 4;
		console.log(b) // true;
	}
]);
```