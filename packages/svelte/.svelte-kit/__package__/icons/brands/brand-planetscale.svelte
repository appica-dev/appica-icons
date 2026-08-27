<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 12-6 6m14.993-6.37a9 9 0 0 1-9.362 9.362zM12 3a9 9 0 0 1 8.166 5.211L8.21 20.166A9 9 0 0 1 12 3\"/>";
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
