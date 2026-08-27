<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 11 1.5-1.5a2.828 2.828 0 0 0-4-4L4 16v4h4l2-2m3.5-11.5 4 4M18 22l3.35-3.284a2.145 2.145 0 0 0 .005-3.07 2.24 2.24 0 0 0-3.129-.007l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.14 2.14 0 0 0-.006 3.071z\"/>";
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
