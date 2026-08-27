<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 13.972a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0V4.935a4.99 4.99 0 0 1-7 0 4.99 4.99 0 0 0-7 0zm0 0V21\"/>";
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
