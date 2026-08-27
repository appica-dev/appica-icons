<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 20v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4m-4 8H8\"/>";
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
