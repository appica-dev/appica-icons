<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10.105 4.072.492-.491a1.984 1.984 0 0 1 2.806 0l7.015 7.015a1.984 1.984 0 0 1 0 2.807l-7.014 7.015a1.98 1.98 0 0 1-2.808 0l-7.014-7.015a1.984 1.984 0 0 1 0-2.807l3.507-3.508m0 0H3.133m3.956 0v3.957\"/>";
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
