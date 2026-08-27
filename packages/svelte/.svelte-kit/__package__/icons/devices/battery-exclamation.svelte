<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 17h8a2 2 0 0 0 2-2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m1 4v3m0 3v.01\"/>";
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
