<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 4h8a8 8 0 0 1-8 8m0-8a8 8 0 0 0-8 8m8-8v16m-8-8a8 8 0 0 0 8 8m-8-8h8m0 8h8a8 8 0 0 0-8-8\"/>";
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
