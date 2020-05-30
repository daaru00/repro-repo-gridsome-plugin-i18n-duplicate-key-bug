<template>
  <div>
    <g-link :to="$tp('product/1')">Product 1</g-link><br>
    <g-link :to="$tp('product/2')">Product 2</g-link>
    <h2>
      Context:
    </h2>
    <pre>
      {{ JSON.stringify($context) }}
    </pre>
    <h2>
      Route meta:
    </h2>
    <pre>
      {{ $route.meta }}
    </pre>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
</style>
