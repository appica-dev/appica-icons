<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M22 12H2m2 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8m-2 6a2 2 0 0 0 2-2M4 18a2 2 0 0 0 2 2m8 0h-4\"/>";
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
