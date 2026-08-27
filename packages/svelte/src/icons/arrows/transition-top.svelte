<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m9 9V7m0 0-3 3m3-3 3 3M6 21h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6\"/>";
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
