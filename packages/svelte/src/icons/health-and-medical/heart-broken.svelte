<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.504 12.577 12.008 20m0 0-7.496-7.423a4.996 4.996 0 1 1 7.496-6.561 4.998 4.998 0 1 1 7.496 6.567M12.008 20v-2.998l2-3.997-3.999-2.998 2-3.997\"/>";
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
