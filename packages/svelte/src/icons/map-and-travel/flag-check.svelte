<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.767 15.096A5 5 0 0 1 12 13.972a4.99 4.99 0 0 0-7 0m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v8.535m-14 .502V21m10-2.008L17 21l4-4.016\"/>";
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
