<template>
  <div>
    <h1>
      {{ $t($page.product.name) }}
    </h1>
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
  export default {}
</script>

<page-query>
  query ($id: ID!) {
    product(id: $id) {
      id,
      name
    }
  }
</page-query>
