<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.342 14.914A5 5 0 0 1 12 13.969a4.99 4.99 0 0 0-7 0m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v7.027M5 13.969v7.027m12 0 4-4.015m-5 2.007c0 .8.316 1.565.879 2.13a2.994 2.994 0 0 0 4.242 0 3.017 3.017 0 0 0 0-4.259 2.994 2.994 0 0 0-4.242 0 3.02 3.02 0 0 0-.879 2.13\"/>";
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
