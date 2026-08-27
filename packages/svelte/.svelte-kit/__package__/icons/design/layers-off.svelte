<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.59 4.581C8.952 4.222 9.45 4 10 4h8a2 2 0 0 1 2 2v8c0 .556-.227 1.06-.594 1.422M3 3l18 18m-5-5h-6a2 2 0 0 1-2-2V8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z\"/>";
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
