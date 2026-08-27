<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 10.003c-.922 0-2-.914-2-2.001v-1q.013-.413 1.588-2.07A3 3 0 0 1 5.762 4h12.476a3 3 0 0 1 2.174.932Q21.987 6.59 22 7.002v1c0 1.087-1.078 2-2 2m-16 0c1.107 0 2-.91 2-2 0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2m-16 0q-.176 9.425.814 10.462c1.534.367 4.355.535 7.186.536 2.83-.001 5.652-.17 7.186-.536.99-1.038.898-9.564.814-10.461m-10 6.003 2-2.001m0 0 2 2m-2-2v4.002\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
