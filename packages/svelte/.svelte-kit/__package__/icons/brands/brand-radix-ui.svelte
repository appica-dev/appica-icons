<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M6 3h5v5H6zm5 8v10a5 5 0 0 1-.217-9.995z\"/>";
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
