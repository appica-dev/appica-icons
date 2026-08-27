<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.673 15.335A4.97 4.97 0 0 1 12 13.969a4.99 4.99 0 0 0-7 0m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v7.027M5 13.969v7.027m14-5.019-2 3.011h4L19 22\"/>";
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
