<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 10a7 7 0 0 0 7 7m-7-7a7 7 0 0 1 7-7m-7 7a3.5 3.5 0 1 0 7 0m0 7a7 7 0 0 0 7-7m-7 7a3.5 3.5 0 1 0 0-7m7 0a7 7 0 0 0-7-7m7 7a3.5 3.5 0 1 0-7 0m0-7a3.5 3.5 0 1 0 0 7M3 21l6-6\"/>";
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
