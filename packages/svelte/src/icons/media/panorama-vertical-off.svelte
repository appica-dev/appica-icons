<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 3h10.53c.693 0 1.18.691.935 1.338q-1.647 4.347-1.425 8.692m.828 4.847q.258.888.595 1.778A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34q2.545-6.73.619-13.46M3 3l18 18\"/>";
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
