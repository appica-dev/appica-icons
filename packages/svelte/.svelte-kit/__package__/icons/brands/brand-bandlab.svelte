<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6.885 7-2.536 4.907c-2.021 3.845-2.5 8.775 3.82 9.093h6.809c4.86-.207 7.989-2.975 4.607-9.093L16.597 7m-1.52-3H9.943l3.678 8.768m0 0c.547 1.14.847 1.822.162 2.676-.053.093-1.332 1.907-3.053 1.495-.825-.187-1.384-.926-1.32-1.74.04-.91.62-1.717 1.488-2.074a4.46 4.46 0 0 1 2.723-.357\"/>";
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
