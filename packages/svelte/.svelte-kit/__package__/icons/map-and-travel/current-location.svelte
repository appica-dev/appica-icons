<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 12a8 8 0 0 0 8 8m-8-8a8 8 0 0 1 8-8m-8 8H2m10 8a8 8 0 0 0 8-8m-8 8v2m8-10a8 8 0 0 0-8-8m8 8h2M12 4V2M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
