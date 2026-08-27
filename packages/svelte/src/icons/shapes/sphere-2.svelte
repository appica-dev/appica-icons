<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 0V2m0 0C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3 6c4.057.522 7 2.073 7 3.906C22 14.167 17.523 16 12 16S2 14.167 2 11.906C2 10.073 4.943 8.522 9 8\"/>";
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
