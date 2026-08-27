<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18.001 4.82-5.198 2.324a1.96 1.96 0 0 1-1.602 0l-5.2-2.325m6 2.501V21.5m6.402-15.992 2.538 10.158a1.99 1.99 0 0 1-1.064 2.278l-7.036 3.366a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278L5.6 5.508A1.98 1.98 0 0 1 6.71 4.18l4.495-2.01a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328\"/>";
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
