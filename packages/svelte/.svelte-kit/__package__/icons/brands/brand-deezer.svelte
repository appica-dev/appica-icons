<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 16.5h2v.5H3zm5 0h2.5v.5H8zm8 .5h-2.5v-.5H16zm5.5 0H19v-.5h2.5zm0-4H19v.5h2.5zm0-3.5H19v.5h2.5zm0-3.5H19v.5h2.5zM16 13h-2.5v.5H16zm-8 .5h2.5V13H8zm0-4h2.5v.5H8z\"/>";
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
