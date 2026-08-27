<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6.744 4.325 7.82-1.267a4.456 4.456 0 0 1 5.11 3.686l1.268 7.82a4.456 4.456 0 0 1-3.686 5.111l-7.82 1.267a4.456 4.456 0 0 1-5.111-3.686l-1.267-7.82a4.456 4.456 0 0 1 3.686-5.11m.508 3.38 7.897-1.28a1 1 0 0 1 1.147.827l.36 2.223-9.562 3.51-.67-4.134a1 1 0 0 1 .828-1.147\"/>";
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
