<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 15H5.5a2.5 2.5 0 0 1 0-5H6m9 5v3.5a2.5 2.5 0 0 1-5 0V18m3-9h5.5a2.5 2.5 0 0 1 0 5H18m-9-2V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18\"/>";
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
