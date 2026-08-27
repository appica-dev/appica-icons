<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a4 4 0 0 0-4 4v5m4-9a4 4 0 0 1 4 4v5m-4-9V4m4 12H8m8 0v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3M9 4h6M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/>";
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
