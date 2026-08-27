<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.929 13.131A9 9 0 1 0 11.998 21M3.6 9h16.8M3.6 15h9.9m-2-12a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.505 10.573M22 22l-5-5m0 5 5-5\"/>";
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
