<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.33 13.414A4.986 4.986 0 0 0 5 13.97m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v6.023M5 13.969v7.027M18 22l3.35-3.297a2.15 2.15 0 0 0 .483-2.377 2.2 2.2 0 0 0-.478-.705 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.15 2.15 0 0 0-.651 1.54 2.16 2.16 0 0 0 .645 1.542z\"/>";
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
