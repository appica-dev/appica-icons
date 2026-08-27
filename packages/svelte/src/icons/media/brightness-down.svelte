<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 5v.01m5 1.989v.01m2 4.986v.01m-2 4.986v.01m-5 1.989V19m-5-2.009v.01m-2-5.006v.01m2-5.006v.01m2 4.986a2.997 2.997 0 0 0 3 2.998 3 3 0 0 0 3-2.998 2.997 2.997 0 0 0-3-2.998 3 3 0 0 0-3 2.998\"/>";
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
