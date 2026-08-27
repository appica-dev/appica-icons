<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 7v.01M7 10v.01M7 13v.01M17 7v.01M17 10v.01M17 13v.01M7 21h1a1 1 0 0 0 1-1v-1a3 3 0 0 1 6 0v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5l-3-2-3 2v6h-4V5L7 3 4 5v15a1 1 0 0 0 1 1z\"/>";
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
