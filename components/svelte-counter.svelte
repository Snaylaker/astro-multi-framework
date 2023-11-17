<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<div>
  <h2>Svelte counter: {count}</h2>
  <button on:click={increment}>Increment</button>
</div>
