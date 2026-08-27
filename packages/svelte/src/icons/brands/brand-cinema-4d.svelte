<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495M21 12a9 9 0 1 1-9-9m9 9a9 9 0 0 0-9-9m9 9q0-.52-.055-1.037c-.097-.897-.793-1.573-1.62-1.573a1.56 1.56 0 0 0-1.149.52 1.86 1.86 0 0 0-.476 1.253v1.175M12 3q.52 0 1.037.056c.897.1 1.573.818 1.573 1.67 0 .444-.187.87-.52 1.184s-.783.49-1.253.49h-1.175m6.038 5.737A5.738 5.738 0 1 1 11.963 6.4\"/>";
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
