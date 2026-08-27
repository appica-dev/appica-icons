<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h10a2 2 0 0 1 2 2v10m-.581 3.41c-.362.364-.864.59-1.419.59H6a2 2 0 0 1-2-2V6c0-.552.224-1.052.585-1.413M12 4v4m1.503 1.497L14 9l2 2V4M3 3l18 18\"/>";
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
