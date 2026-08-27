<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 13.97a4.99 4.99 0 0 0-7 0m0 0V4.934a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v6.023M5 13.969v7.027m15.2-.803L22 22m-7-4.015c0 .798.316 1.564.879 2.13a2.994 2.994 0 0 0 4.242 0 3.017 3.017 0 0 0 0-4.26 2.994 2.994 0 0 0-4.242 0 3.02 3.02 0 0 0-.879 2.13\"/>";
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
