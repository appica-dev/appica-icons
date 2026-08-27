<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h10a2 2 0 0 1 2 2v10m-.584 3.412A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.552.224-1.052.586-1.414M3 3l18 18\"/>";
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
