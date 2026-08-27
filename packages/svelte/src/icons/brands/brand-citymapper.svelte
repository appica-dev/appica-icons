<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 12h8m0 0-3-3m3 3-3 3M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zm18 0a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1z\"/>";
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
