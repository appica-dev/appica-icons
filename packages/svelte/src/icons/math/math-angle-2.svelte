<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 22V2m0 0 10 15M12 2 2 17m14-9c-1.145 1.263-2.52 2-4 2s-2.855-.737-4-2m4 6c-2.22 0-4.283-.737-6-2\"/>";
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
