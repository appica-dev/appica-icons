<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 5h2m6 7q-1 8-5 8h-4q-4 0-5-8m7 6v2m-2-9v.01m4-.01v.01M11 16q0 1 1 1t1-1zM5 4l6 .97-6.238 6.688a1.02 1.02 0 0 1-1.41.111.95.95 0 0 1-.327-.954zm14 0-6 .97 6.238 6.688c.358.408.989.458 1.41.111a.95.95 0 0 0 .327-.954z\"/>";
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
