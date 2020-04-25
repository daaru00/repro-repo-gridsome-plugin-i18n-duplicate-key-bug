<template>
  <div>
    <h1>
      {{ $page.product.name }}
    </h1>
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
