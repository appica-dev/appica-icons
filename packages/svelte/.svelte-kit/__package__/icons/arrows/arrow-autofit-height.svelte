<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m6 10v7m0 0-3-3m3 3 3-3M18 3v7m0-7-3 3m3-3 3 3\"/>";
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
