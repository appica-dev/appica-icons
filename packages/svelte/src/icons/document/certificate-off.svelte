<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.876 12.881a3 3 0 1 0 4.243 4.243m.588-3.42a3 3 0 0 0-1.437-1.423M13 17.5V22l2-1.5 2 1.5v-4.5M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2m4 0h10a2 2 0 0 1 2 2v10M6 9h3m4 0h5M6 12h3m-3 3h2M3 3l18 18\"/>";
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
