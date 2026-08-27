<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 18h6M9 6h6m-3 .5V6v12M5 5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm0 12a2 2 0 0 1 4 0v2a2 2 0 0 1-4 0zM15 5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm0 12a2 2 0 0 1 4 0v2a2 2 0 0 1-4 0z\"/>";
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
