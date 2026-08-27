<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6 1 1.465 1.638a2 2 0 1 1-3.015.099z\"/>";
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
