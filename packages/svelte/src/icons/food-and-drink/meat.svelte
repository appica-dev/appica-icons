<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821m-12.691 1.29c1.17-1.171 4.337.095 7.07 2.829s4 5.899 2.828 7.071c-1.17 1.171-4.337-.095-7.07-2.829s-4-5.899-2.828-7.071m0 0C6.98 7.62 12.363 6.67 15.096 9.404c2.734 2.733 1.784 8.115-2.121 12.021M7.5 16l1 1\"/>";
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
