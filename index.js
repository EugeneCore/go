function go(queue)
{
	if (queue == undefined)
	{
		return;
	}

	// Build a queue on initialization

	if (queue.list == undefined)
	{
		let _queue = {list: [], index: 0};

		for (let i in queue)
		{
			if (typeof queue[i] == 'function')
			{
				_queue.list.push(queue[i]);
			}
		}

		if (_queue.list.length == 0)
		{
			return;
		}

		queue = _queue;
	}

	// Build a controller on initialization

	if (queue.controller == undefined)
	{
		queue.controller = {};

		// Add to a controller all queue's functions by its names if provided

		for (let i in queue.list)
		{
			if (queue.list[i].name)
			{
				queue.controller[queue.list[i].name] = function()
				{
					queue.index = i;
					queue.list[i](queue.controller, ...arguments);
				}
			}
		}

		// Call the next function

		queue.controller.next = function()
		{
			queue.index++;
				
			if (queue.list[queue.index])
			{
				go(queue, ...arguments);
			}
		}

		// Repeat the current function

		queue.controller.repeat = function()
		{
			go(queue, ...arguments);
		}
	}

	// Call the next function, pass a controller and arguments

	if (queue.list[queue.index])
	{
		queue.list[queue.index](queue.controller, ...[...arguments].slice(1));
	}
}